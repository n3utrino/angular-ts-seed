
export interface TableModel {
    cols:ITableColumn[];
    getColumnName(col:number):string;
    getRowCount():number;
    getColumnCount():number
    getValueAt(row:number, col:number):any;
    isCellEditable(row:number, col:number):boolean;
    setValueAt(value:any, row:number, col:number);
    sortColumn(columnIndex:number);
}

export interface ITable<T> {
    data:T[];
    tableModel:TableModel;
    rowTemplate:string;
}

export interface ITableColumn {
    sort?:SortType;
    title:string;
    style?:string;
    width?:string;
}

enum SortType{ASC, DESC}

class DefaultTableModel<T> implements TableModel {

    public sortCol:number;
    public cols:ITableColumn[];

    constructor(private data:T[], cols:ITableColumn[]) {
        this.cols = cols;
    }


    getColumnName(col:number):string {
        return this.cols[col].title;
    }

    getRowCount():number {
        return this.data.length;
    }

    getColumnCount():number {
        return this.cols.length;
    }

    getValueAt(row:number, col:number):any {
        return undefined;
    }

    isCellEditable(row:number, col:number):boolean {
        return undefined;
    }

    setValueAt(value:any, row:number, col:number) {
    }

    sortColumn(colIndex:number) {

        let sortType:SortType = this.cols[colIndex].sort;
        switch (sortType) {
            case SortType.ASC:
                sortType = SortType.DESC;
                break;
            default :
                sortType = SortType.ASC;
        }


        this.cols[colIndex].sort = sortType;

        this.sortCol = colIndex;
    }
}

export class DefaultTable<T> implements ITable<T> {

    tableModel:TableModel;
    rowTemplate:string;
    rowTemplateUrl:string;
    data:T[];

    constructor(data:T[], private columns:ITableColumn[]) {
        this.data = data;
        this.tableModel = new DefaultTableModel<T>(this.data, columns);
    };


}

export interface TableComponent {
    tableData?:any[];
    tableConfig?:TableConfig;
}

export interface TableConfig {
    rowTemplateUrl:string;
    columns:ITableColumn[];

}

