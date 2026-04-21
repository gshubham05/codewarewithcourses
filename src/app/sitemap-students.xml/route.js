import students from "@/app/Students/data";

export async function GET(){

const baseUrl="https://www.codewareit.in"

const urls=students.map(student=>`

<url>
<loc>${baseUrl}/Students/${student.id}</loc>
</url>

`).join("")

const xml=`<?xml version="1.0"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`

return new Response(xml,{
headers:{"Content-Type":"application/xml"}
})

}