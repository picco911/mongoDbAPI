import { Injectable } from '@angular/core';
import { CV } from '../models/cv.model'

@Injectable({
  providedIn: 'root'
})
export class CVService {

  constructor() { }

  allPosts!: CV[];
}
