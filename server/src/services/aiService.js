let cachedModel = null;
let llamaInstance = null;

async function getModel() {
    if (cachedModel) return cachedModel;

    console.log("Loading node-llama-cpp...");
    const { getLlama } = await import("node-llama-cpp");

    llamaInstance = await getLlama();

    console.log("Loading GGUF model...");
    cachedModel = await llamaInstance.loadModel({
        modelPath: "/home/pscity004/Downloads/Llama-3.2-1B-Instruct-Q4_K_M.gguf"
    });

    console.log("Model loaded.");
    return cachedModel;
}
async function analyzeResume(resumeText) {
    
    const { LlamaChatSession } = await import("node-llama-cpp");

    const model = await getModel();

    const context = await model.createContext({
        contextSize: 512
    });

    const session = new LlamaChatSession({
        contextSequence: context.getSequence()
    });

    const response = await session.prompt(
        `Analyze this resume:\n\n${resumeText.slice(0, 3000)}`
    );

    return response;
}

module.exports = {
    analyzeResume
};