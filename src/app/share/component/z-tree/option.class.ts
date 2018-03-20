export class Options {
    treeId : string;
    data? : Object;
    view? : {
        addDiyDom? : Function,
        selectedMulti? : boolean
    };
    callback? : {
        onClick? : Function,
        onAsyncSuccess? : Function
    };
    async? : {
        enable? : boolean,
        dataType? : string,
        type? : string,
        url? : string,
        dataFilter? : Function,
        autoParam? : any,
        otherParam? : Object
    }
    additionData? : Object;    
}