<script>
  import { submitBusinessData, uploadBusinessImage } from '../lib/api'; // Import API functions
  import '../styles.css'; // Import the CSS file

  let businessName = '';
  let businessDescription = '';
  let businessAddress = '';
  let businessPhone = '';
  let businessImage = null; // This will hold the file input
  let businessLocation = { lat: null, lng: null };

  // Function to get business location using the Geolocation API
  function getBusinessLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        businessLocation.lat = position.coords.latitude;
        businessLocation.lng = position.coords.longitude;
      }, (error) => {
        console.error("Error getting location:", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    let imageUrl = '';

    // Handle file upload if an image is selected
    if (businessImage) {
      try {
        const uploadResponse = await uploadBusinessImage(businessImage); // Upload the image
        imageUrl = uploadResponse.filePath; // Assuming the API returns the file path
      } catch (error) {
        console.error('Error uploading business image:', error);
        return; // Exit if there's an error uploading the image
      }
    }

    const businessData = {
      businessName,
      businessDescription,
      businessAddress,
      businessPhone,
      businessImage: imageUrl, // Set the image URL to the data
      businessLocation
    };

    try {
      const response = await submitBusinessData(businessData); // Call the API to submit business data
      console.log('Business data saved successfully!', response);
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error saving business data:', error);
    }
  }

  // Function to reset the form fields
  function resetForm() {
    businessName = '';
    businessDescription = '';
    businessAddress = '';
    businessPhone = '';
    businessImage = null;
    businessLocation = { lat: null, lng: null };
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="businessName">Business Name:</label>
  <input type="text" id="businessName" bind:value={businessName} required />

  <label for="businessDescription">Business Description:</label>
  <textarea id="businessDescription" bind:value={businessDescription} required></textarea>

  <label for="businessAddress">Business Address:</label>
  <input type="text" id="businessAddress" bind:value={businessAddress} required />

  <label for="businessPhone">Business Phone:</label>
  <input type="text" id="businessPhone" bind:value={businessPhone} required />

  <label for="businessImage">Business Image:</label>
  <input type="file" id="businessImage" accept="image/*" on:change={event => businessImage = event.target.files[0]} />

  <button type="button" on:click={getBusinessLocation}>Enable Geo-tracking</button>
  {#if businessLocation.lat !== null && businessLocation.lng !== null}
    <p>Your Location: {businessLocation.lat}, {businessLocation.lng}</p>
  {/if}

  <button type="submit">Submit</button>
</form>


