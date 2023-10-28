package main

import (
	"fmt"
	"log"
	"net/http"
	"runtime"
  "time"
)

var requestNumber int = 0

func main() {
  runtime.GOMAXPROCS(16)
	http.HandleFunc("/", handler)
	port := "3000"
	fmt.Printf("Server listening on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Starting request %d\n", requestNumber)
	expensiveOperation()
	fmt.Fprintf(w, "Hello World!")
}

func expensiveOperation() {
	startTime := time.Now()
	ctr := 0
	for i := 0; i < 10000000000; i++ {
		ctr++
	}
	elapsed := time.Since(startTime)
	fmt.Printf("Request %d took total %s\n", requestNumber, elapsed)
	requestNumber++
}

