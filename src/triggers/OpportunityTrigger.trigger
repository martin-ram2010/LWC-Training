trigger OpportunityTrigger on Opportunity (after update) {
    List<Case> caseList = new List<Case>();
    Map<Id,String> oppIdVsDescription = new Map<Id,String>();
    for(Opportunity opp: [Select Id, (Select Product2Id, Product2.Name, Product2.Family,Quantity from OpportunityLIneItems ) from 
                          Opportunity where Id IN: Trigger.new]){
                              if(!oppIdVsDescription.containsKey(opp.Id))
                                       oppIdVsDescription.put(opp.Id,'');
                              for(OpportunityLIneItem oli: opp.OpportunityLIneItems){
                                   oppIdVsDescription.put(opp.Id,oppIdVsDescription.get(opp.Id)+oli.Product2.Family+':'+oli.Product2.Name+'-'+oli.Quantity+', ');
                              }
			
	}
    
    for(Opportunity  opp: Trigger.new){
        if(opp.StageName != Trigger.oldMap.get(opp.Id).StageName && opp.StageName=='Closed Won')
        	caseList.add(new Case(Subject=opp.Name, AccountId=opp.AccountId,Status='New', Priority='Medium', Description=oppIdVsDescription.get(opp.Id).removeEnd(', ')));
    }
    if(!caseList.isEmpty())
        insert caseList;
}