<script>
  let username = '';
  let email = '';
  let phone = '';
  let userLocation = { lat: null, lng: null };

  async function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        userLocation.lat = position.coords.latitude;
        userLocation.lng = position.coords.longitude;
      });
    }
  }

  function handleSubmit() {
    // Handle form submission logic
    console.log({
      username,
      email,
      phone,
      userLocation
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="username">Username:</label>
  <input type="text" id="username" bind:value={username} />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />

  <label for="phone">Phone:</label>
  <input type="text" id="phone" bind:value={phone} />

  <button type="button" on:click={getUserLocation}>Enable Geo-tracking</button>
  {#if userLocation.lat && userLocation.lng}
    <p>Your Location: {userLocation.lat}, {userLocation.lng}</p>
  {/if}

  <button type="submit">Submit</button>
</form>
