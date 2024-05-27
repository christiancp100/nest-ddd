export class Criteria {
  readonly filters: any; // TODO add types
  readonly order: any; // TODO add types
  readonly limit?: number;
  readonly offset?: number;

  constructor(filters: any, order: any, limit?: number, offset?: number) {
    this.filters = filters;
    this.order = order;
    this.limit = limit;
    this.offset = offset;
  }

  public hasFilters(): boolean {
    return this.filters.filters.length > 0;
  }
}
