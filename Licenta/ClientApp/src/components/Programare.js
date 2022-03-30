import React, { Component } from 'react'
import {Inject ,ScheduleComponent ,Day ,Week,WorkWeek, Month,Agenda,EventSettingsModel} from '@syncfusion/ej2-react-schedule'
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
class Programare extends Component () {

    private remoteData = new DataManager({
        url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor:new WebApiAdaptor,
        crossDomain:true
    });
    render (){
  return  (
        <ScheduleComponent currentView='Month'>
        <Inject services={[Day ,Week ,WorkWeek, Month, Agenda]} />
         </ScheduleComponent>
         );
}
}

export default Programare