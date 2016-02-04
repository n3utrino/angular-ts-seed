import * as angular from 'angular';
import IComponentOptions = angular.IComponentOptions;
import IDirectiveFactory = angular.IDirectiveFactory;
import {DefaultTable} from "../app/tsTable";
import {TableConfig} from "./tsTable";
import {TableModel} from "./tsTable";
import {TableComponent} from "./tsTable";


export const MODULE_NAME = "tsTable";

let module = angular.module(MODULE_NAME, []);

class TableController<T> implements TableComponent {
    private table:DefaultTable<T>;

    //Gets injected by angular
    public tableData:T[];
    public tableConfig:TableConfig;
    public tableModel:TableModel;

    constructor() {
        this.table = new DefaultTable<T>(this.tableData, this.tableConfig.columns);
        this.table.rowTemplateUrl = this.tableConfig.rowTemplateUrl;
        this.tableModel = this.table.tableModel;

    }
}

let tsTableOptions:IComponentOptions = {
    templateUrl: 'app/tpl/tsTable.tpl.html',
    controller: TableController,
    controllerAs: 'tableCtrl',
    bindings: {
        tableData: "=",
        tableConfig: "=",
        tableModel: "="
    }
};

let tsTableTrOptions:IDirectiveFactory = ()=> {
    return {
        templateUrl: 'app/tpl/tsTableSelect.tpl.html',
        replace: true
    }
};


module.component("tsTable", tsTableOptions);
module.directive("tsTableSelect", tsTableTrOptions);