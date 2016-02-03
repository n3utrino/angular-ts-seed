

   export interface TableModel {
        getColumnName(col:number):string;
        getRowCount():number;
        getColumnCount():number
        getValueAt(row:number, col:number):any;
        isCellEditable(row:number, col:number):boolean;
        setValueAt(value:any, row:number, col:number);
    }

   export interface ITable<T> {
        data:T[];
        tableModel:TableModel;
        rowTemplate:string;
    }



    class DefaultTableModel<T> implements TableModel{

        constructor(private data:T[],private cols:string[]){
        }


        getColumnName(col:number):string {
            return this.cols[col];
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
    }

    export class DefaultTable<T> implements ITable<T>{

        tableModel:TableModel;
        rowTemplate:string;
        data:T[];

        constructor(data:T[],private columns:string[]){
            this.data = data;
            this.tableModel = new DefaultTableModel<T>(this.data,columns);
        };

    }
