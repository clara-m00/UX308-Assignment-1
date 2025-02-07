export function reply(message){
    let reply = `${message} to you too`;
    if(message.includes("dumplings")){
        reply = "Sure! It will be $13.50"
    }

    if(message.includes("steak")){
        reply = "Sure! It will be $15.00"
    }
    
    return reply;
    
    
}