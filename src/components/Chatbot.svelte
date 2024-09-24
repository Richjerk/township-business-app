<script>
  import { Configuration, LangchainApi } from "langchain";

  let userQuery = '';
  let chatbotResponse = '';

  const configuration = new Configuration({
    apiKey: 'ls__b125e959537a4c0bbe28a0127ef50e80'
  });
  const langchain = new LangchainApi(configuration);

  async function askChatbot() {
    const response = await langchain.createCompletion({
      model: "text-davinci-003", // Adjust the model as needed
      prompt: userQuery,
      max_tokens: 150
    });
    chatbotResponse = response.data.choices[0].text.trim();
  }
</script>

<div>
  <input type="text" bind:value={userQuery} placeholder="Ask the chatbot" />
  <button on:click={askChatbot}>Submit</button>

  {#if chatbotResponse}
    <p>Chatbot: {chatbotResponse}</p>
  {/if}
</div>
