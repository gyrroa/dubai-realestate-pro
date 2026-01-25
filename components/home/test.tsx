import { client } from "@/sanity/lib/client"; // Adjust path to your client config
import { DEVELOPERS_HERO_QUERY } from "@/sanity/lib/queries"; // Adjust path to where you saved your query

// 1. Mark component as 'async' to use await
export default async function TestSection() {
    
    // 2. Fetch the data directly (Server Side)
    // We add { next: { revalidate: 0 } } to ensure we always get fresh data while testing
    const data = await client.fetch(DEVELOPERS_HERO_QUERY, {}, { next: { revalidate: 0 } });

    // 3. Log it to your VS Code terminal (optional, good for debugging)
    console.log("Sanity Data:", data);

    return (
        <section className="min-h-screen p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
            
            {/* 4. The "Dump" Test: Render raw JSON to see exactly what you got */}
            <div className="bg-black text-green-400 p-6 rounded-lg overflow-auto shadow-xl border border-gray-800">
                <pre className="font-mono text-sm">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            {/* 5. Optional: Try mapping it to ensure fields exist */}
            <div className="mt-8 grid grid-cols-3 gap-4">
                {data.map((dev: any) => (
                    <div key={dev._id} className="border p-4 bg-white rounded">
                        <p className="font-bold">{dev.name.en}</p>
                        {/* Check if image exists before rendering */}
                        {dev.logo ? <p className="text-green-600 text-xs">Has Logo ✅</p> : <p className="text-red-500 text-xs">No Logo ❌</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}