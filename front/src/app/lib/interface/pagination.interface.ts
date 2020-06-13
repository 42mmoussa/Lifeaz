import {IIntervention} from './intervention.interface';

export interface IPagination {
  totalNbPage: number;
  currentPage: number;
  nbElements: number;
  pageElement: IIntervention[]
}
