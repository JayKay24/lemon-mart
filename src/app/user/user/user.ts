import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { AuthService, IAuthStatus } from '../../auth/auth.service'
import { CacheService } from '../../auth/cache.service'
import { Role } from '../../auth/role.enum'
import { transformError } from '../../common/common'

export interface IUser {
  id: string
  email: string
  name: {
    first: string
    middle: string
    last: string
  }
  picture: string
  role: Role
  userStatus: boolean
  dateOfBirth: Date
  address: {
    line1: string
    line2: string
    city: string
    state: string
    zip: string
  }
  phones: IPhone[]
}

export interface IPhone {
  type: string
  number: string
  id: number
}

export class User implements IUser {
  constructor(
    public id = '',
    public email = '',
    public name = { first: '', middle: '', last: '' },
    public picture = '',
    public role = Role.None,
    public dateOfBirth = null,
    public userStatus = false,
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    },
    public phones = []
  ) {}

  static buildUser(user: IUser) {
    return new User(
      user.id,
      user.email,
      user.name,
      user.picture,
      user.role,
      user.dateOfBirth,
      user.userStatus,
      user.address,
      user.phones
    )
  }

  get fullName(): string {
    return `${this.name.first} ${this.name.middle} ${this.name.last}`
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends CacheService {
  currentUser = new BehaviorSubject<IUser>(this.getItem('user') || new User())
  private currentAuthStatus: IAuthStatus
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    super()
    this.currentUser.subscribe(user => this.setItem('user', user))
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = authStatus)
    )
  }

  getCurrentUser(): Observable<IUser> {
    const userObservable = this.getUser(this.currentAuthStatus.userId).pipe(
      catchError(transformError)
    )

    userObservable.subscribe(
      user => this.currentUser.next(user),
      err => Observable.throw(err)
    )
    return userObservable
  }

  getUser(id): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.baseUrl}/v1/user/${id}`)
  }

  updateUser(user: IUser): Observable<IUser> {
    this.setItem('draft-user', user) // cache user data in case of errors
    const updateResponse = this.httpClient
      .put<IUser>(`${environment.baseUrl}/v1/user/${user.id || 0}`, user)
      .pipe(catchError(transformError))

    updateResponse.subscribe(
      res => {
        this.currentUser.next(res)
        this.removeItem('draft-user')
      },
      err => Observable.throw(err)
    )
    return updateResponse
  }
}
