import { Financial } from '../static-data/financial';

export default class FinancialService {
  public getData(tableName: string): any[] {
    return Financial[tableName];
  }
}
