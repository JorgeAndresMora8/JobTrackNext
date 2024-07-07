import clientPromise from "../../../../../lib/mongodb";

export async function GET(request, context) {


      const { searchParams } = new URL(request.url);
      const category = searchParams.get("category")
      const jobName = searchParams.get("jobname")

      let mongoDbParams = []

      console.log(category)
      console.log(jobName)

    //   if(jobName !== "" ) mongoDbParams.push( { $text: { $search: jobName } })
    if(!!jobName) mongoDbParams.push( { $text: { $search: jobName } })
        console.log(!!category)
    //   if(category !== "") mongoDbParams.push({ category: category })
    if(!!category) mongoDbParams.push({ category: category })


    console.log(mongoDbParams)

  try {
    const client = await clientPromise;
    const db = client.db('test');

    // Perform actions on the database
    const data = await db.collection('jobs').find({$and: mongoDbParams}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'An error occurred while connecting to the database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

return new Response({message: "hello world"})

}