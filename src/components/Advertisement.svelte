<script>
  export let ad; // Prop to receive advertisement data
</script>

<div class="advertisement" on:click={() => window.open(ad.link, "_blank")}>
  <h3>{ad.title}</h3>
  <p>{ad.description}</p>
  <img src={ad.image} alt={ad.title} />
</div>

<style>
  .advertisement {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    text-align: center;
    cursor: pointer; /* Show pointer cursor on hover */
    transition: transform 0.2s; /* Smooth transform effect */
  }
  
  .advertisement:hover {
    transform: scale(1.02); /* Slightly enlarge on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
  }

  .advertisement img {
    max-width: 100%;
    height: auto;
    border-radius: 5px; /* Optional: add border radius for images */
  }
</style>

