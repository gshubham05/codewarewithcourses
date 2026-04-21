export async function GET(){

    const txt=`
    
    User-agent: *
    Allow: /
    
    Sitemap: https://www.codewareit.in/sitemap.xml
    
    `
    
    return new Response(txt,{
    headers:{ "Content-Type":"text/plain"}
    })
    
    }