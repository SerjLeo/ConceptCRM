package app

import (
	"log"
	"net/http"
)

func RunApp() {

	//fs := http.FileServer(http.Dir("../build"))
	//http.Handle("/", fs)

	fs := http.FileServer(http.Dir("../build/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "../build/index.html")
	})

	log.Println("Listening on :3000...")
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
