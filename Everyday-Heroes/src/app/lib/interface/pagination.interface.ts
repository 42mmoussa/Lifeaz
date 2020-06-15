import {IIntervention} from './intervention.interface';

export interface IInterventionPage {
  totalNbPage: number;
  currentPage: number;
  nbElementsPerPage: number;
  totalNbElement: number;
  pageElement: IIntervention[];
}
