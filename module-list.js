(function(){
    var modules={
        "panel-main":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child":    			{url:"$H/m/panel-child.html"},
        "panel-export":   {url:"$H/m/panel-export.html",router:1},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"daily-quest-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-sleep-diary",
                                            online_questionnaire:"online-questionnaire-app-sleep-diary"
                                        },                                    
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"daily-quest-participant"},

        "online-questionnaire-setup-sleep-diary": 	{url:"$H/m/oq-setup.html",Table:"daily-quest-participant"},
        "online-questionnaire-app-sleep-diary":    {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"daily-quest-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"daily-quest-notes"},

        "panel-main-recruitment":    			{url:"$H/m/library/recruitment-all-data.html",Table:"daily-quest-recruitment-record"},
        "panel-main-recruitment-eligible":     {url:"$H/m/library/recruitment-eligible-data.html",Table:"daily-quest-recruitment-record"},
        "panel-main-recruitment-non-eligible": {url:"$H/m/library/recruitment-non-eligible-data.html",Table:"daily-quest-recruitment-record"},


        "daily-quest-randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"daily-quest-randomisation-table",form_module:"daily-quest-randomisation-table-form"},
        "daily-quest-randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"daily-quest-randomisation-table"},
        "daily-quest-randomisation-upload-data":		    {url:"$H/m/library/randomisation-upload-data.html",Table:"daily-quest-randomisation-upload",form_module:"daily-quest-randomisation-upload-form",task_name:"Randomisation Document"},
        "daily-quest-randomisation-upload-form":		    {url:"$H/m/library/randomisation-upload-form.html",Table:"daily-quest-randomisation-upload",task_name:"Randomisation Document"},
        
        "daily-quest-sleep-diary-data":		            {url:"$H/m/library/sleep-diary-data.html",Table:"daily-quest-sleep-diary",form_module:"daily-quest-sleep-diary-form",task_name:"Sleep Diary"},
        "daily-quest-sleep-diary-form":		            {url:"$H/m/library/sleep-diary-form.html",Table:"daily-quest-sleep-diary",task_name:"Sleep Diary"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
