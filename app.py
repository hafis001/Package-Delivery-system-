import time
from datetime import datetime, timedelta

# Function to simulate the package journey
def track_package():
    # Getting user input for checkpoints
    num_checkpoints = int(input("Enter the number of checkpoints: "))
    
    checkpoints = []
    for i in range(num_checkpoints):
        checkpoint_name = input(f"Enter name of checkpoint {i + 1}: ")
        receiver_name = input(f"Enter name of receiver at {checkpoint_name}: ")
        receive_date = input(f"Enter the date when package reached {checkpoint_name} (YYYY-MM-DD): ")
        checkpoints.append({
            "checkpoint": checkpoint_name,
            "receiver": receiver_name,
            "receive_date": datetime.strptime(receive_date, "%Y-%m-%d")
        })
    
    # Set the starting point (first checkpoint)
    current_time = datetime.now()

    print("\nPackage Tracking Started...")
    
    # Iterate through all the checkpoints
    for idx, checkpoint in enumerate(checkpoints):
        checkpoint_name = checkpoint["checkpoint"]
        receiver_name = checkpoint["receiver"]
        receive_date = checkpoint["receive_date"]

        print(f"\nArriving at {checkpoint_name}...")
        # Simulate package arrival and show relevant info
        print(f"Receiver: {receiver_name}")
        print(f"Arrival Date: {receive_date.strftime('%Y-%m-%d')}")
        print(f"Time of Arrival: {current_time.strftime('%Y-%m-%d %H:%M:%S')}")
        
        # Time delay for simulation purposes
        time.sleep(2)

        # After arrival, calculate the date and time for the next checkpoint
        if idx < len(checkpoints) - 1:
            current_time = receive_date + timedelta(days=1)  # Simulate next day's arrival

    # After all checkpoints, end the tracking
    print("\nPackage has reached its final destination. Tracking Complete.")

# Start the package tracking simulation
track_package()
