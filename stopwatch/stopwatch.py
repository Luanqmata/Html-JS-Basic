import time

start_time = None
elapsed_time = 0
is_running = False

while True:
    # Wait for user input
    user_input = input("Aperte 'c' para começar, 'p' para pausar ou 'r' para zerar o relógio: ")

    if user_input == 's':
        if not is_running:
            start_time = time.time()
            is_running = True
            print("Stopwatch started!")
        else:
            print("Stopwatch is already running!")

    elif user_input == 'p':
        if is_running:
            elapsed_time += time.time() - start_time
            is_running = False
            print("Stopwatch paused! Elapsed time: %.2f seconds" % elapsed_time)
        else:
            print("Stopwatch is not running!")

    elif user_input == 'r':
        start_time = None
        elapsed_time = 0
        is_running = False
        print("Stopwatch reset!")

    else:
        print("Invalid input! Please enter 's', 'p', or 'r'.")

    # Wait for 1 second before displaying the prompt again
    time.sleep(1)