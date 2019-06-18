class CopyRightWebpackPlugin{
    constructor(options){
        console.log(options);
    }

    apply(complier){
        complier.hooks.compile.tap('CopyRightWebpackPlugin',(complition)=>{
            console.log('test');
        });

        complier.hooks.emit.tapAsync('CopyRightWebpackPlugin',(complition,cb)=>{
            debugger;
            complition.assets['copyRightText.txt']={
                source:function(){
                    return 'cope right 1.0'
                },
                size:function(){
                    return 14;
                }
            };
            cb();

        })
    }
}


module.exports=CopyRightWebpackPlugin;