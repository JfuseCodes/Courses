export default async function getWord(){
    
            try {
                const response = await fetch('https://random-word-api.herokuapp.com/word');
            
                // 1. Check if the response is actually okay (not a 503 or 404)
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const result = await response.json();
                return result[0];
            }catch (err) {
                console.error("Fetch failed:", err.message)
            }
        
}