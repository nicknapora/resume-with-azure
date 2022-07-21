window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionAPIURL = 'https://nicnapresumeapp.azurewebsites.net/api/GetResumeCounter?code=zlQ8nqaKSU2AKrrWVkkxWbd9AqMGMOX5kJK0AsgULbjjAzFuqyFRbQ==';
const functionAPIlocal = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPIURL).then(response => {
        return response.json()
    }).then(response => {
        console.log("website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;

    }).catch(function(error){
        console.log("error " + error);
    });
    return count;
}