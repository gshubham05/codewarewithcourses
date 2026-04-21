export async function postToDevto(title,url){

    await fetch("https://dev.to/api/articles",{
    method:"POST",
    headers:{
    "api-key":"DEVTO_API_KEY",
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
    article:{
    title:title,
    published:true,
    canonical_url:url
    }
    })
    })
    
    }