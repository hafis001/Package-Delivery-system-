document.getElementById('start-btn').addEventListener('click', startTracking);

function startTracking() {
  const numCheckpoints = parseInt(document.getElementById('num-checkpoints').value);
  
  if (isNaN(numCheckpoints) || numCheckpoints < 1 || numCheckpoints > 10) {
    alert("Please enter a valid number of checkpoints (1-10).");
    return;
  }
  
  document.querySelector('.form-container').style.display = 'none';
  document.getElementById('track-container').classList.remove('hidden');

  const checkpointList = document.getElementById('checkpoint-list');
  const currentCheckpointSpan = document.getElementById('current-checkpoint');
  const dateTimeElement = document.getElementById('date-time');
  const startTime = new Date();
  
  // Clear previous checkpoints if any
  checkpointList.innerHTML = '';

  // Create list of checkpoints
  const checkpoints = [];
  for (let i = 0; i < numCheckpoints; i++) {
    const checkpointName = prompt(`Enter the name of checkpoint ${i + 1}:`);
    checkpoints.push(checkpointName);
    const li = document.createElement('li');
    li.textContent = checkpointName;
    checkpointList.appendChild(li);
  }

  let currentCheckpointIndex = 0;

  function updatePackageStatus() {
    if (currentCheckpointIndex < numCheckpoints) {
      const checkpoint = checkpoints[currentCheckpointIndex];
      const currentTime = new Date(startTime.getTime() + currentCheckpointIndex * 2000); // Add 2 seconds delay per checkpoint
      currentCheckpointSpan.textContent = checkpoint;
      dateTimeElement.textContent = `Package Sent: ${currentTime.toLocaleString()}`;
      
      // Move to the next checkpoint after 2 seconds
      currentCheckpointIndex++;
      setTimeout(updatePackageStatus, 2000);
    } else {
      // Package has reached the final destination
      currentCheckpointSpan.textContent = "Destination Reached!";
      dateTimeElement.textContent = `Package delivered successfully at: ${new Date().toLocaleString()}`;
    }
  }

  updatePackageStatus();
}
