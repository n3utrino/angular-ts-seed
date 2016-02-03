import {DefaultTable} from "./tsTable";
import * as angular from 'angular';

let module = angular.module("table", []);


namespace test {

    interface UserData {
        gender:string;
        first_name:string;
        last_name:string;
    }

    class TableController {
        private table:DefaultTable<UserData>;
        public itsMe = "Mario";

        constructor() {

        }
    }

    module.controller("TableController", TableController);

}