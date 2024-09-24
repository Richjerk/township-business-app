<script>
  import Chatbot from '../components/Chatbot.svelte'; // Adjust the path if necessary
  import BusinessForm from './BusinessForm.svelte'; // Import BusinessForm
  import UserForm from './UserForm.svelte'; // Import UserForm
  import Advertisement from '../components/Advertisement.svelte'; // New Advertisement component

  // Sample businesses to display
  let businesses = [
    { name: "Example Business 1", description: "This is a description for Business 1.", image: "/example1.jpg" },
    { name: "Example Business 2", description: "This is a description for Business 2.", image: "/example2.jpg" },
    { name: "Example Business 3", description: "This is a description for Business 3.", image: "/example3.jpg" },
    { name: "Example Business 4", description: "This is a description for Business 4.", image: "/example4.jpg" },
    { name: "Example Business 5", description: "This is a description for Business 5.", image: "/example5.jpg" },
  ];

  // Sample advertisements
  let advertisements = [
    { title: "Ad Space 1", description: "This is a great place for ads!", image: "/ad1.jpg", link: "https://example.com/ad1" },
    { title: "Ad Space 2", description: "Promote your business here!", image: "/ad2.jpg", link: "https://example.com/ad2" },
  ];
</script>

<main>
  <h1>Township Business Directory</h1>

  <section>
    <h2>Listed Businesses</h2>
    {#each businesses as business}
      <div class="business-card">
        <h3>{business.name}</h3>
        <p>{business.description}</p>
        <img src={business.image} alt={business.name} />
      </div>
    {/each}
  </section>

  <section>
    <h2>Advertisement Space</h2>
    {#each advertisements as ad}
      <Advertisement ad={ad} />
    {/each}
  </section>

  <!-- Include the BusinessForm component -->
  <BusinessForm />
  
  <!-- Include the UserForm component -->
  <UserForm />

  <!-- Include the Chatbot component -->
  <Chatbot />
</main>

<style>
  main {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  section {
    margin: 20px 0;
  }

  .business-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .business-card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
</style>

