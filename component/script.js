const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0 

const botsay = (data) => {
    return [
        "Halo nama saya Botsy, siapa nama kamu?",
        `Halooo ${data?.nama} salam kenal, Usia kamu berapa?`,
        `ohhh ${data?.usia} btw hobi kamu apa?`, 
        `Oalah ${data?.hobi} sama dong kalau gitu, kamu udah punya pacar?`,
        `ohh ${data?.pacar} okeedeh kalau gitu, udah dulu ya, byeeee`,
    ]
}

pertanyaan.innerHTML = botsay()[0]

let userData = []

function botstart(){
    init++
    if (init === 1) {
        console.log({nama : jawaban.value})
        botDelay({nama : jawaban.value})
    }  else if (init === 2) {
        console.log({usia : jawaban.value})
        botDelay({usia : jawaban.value})
    }  else if (init === 3){
        console.log({hobi : jawaban.value})
        botDelay({hobi : jawaban.value})
    }   else if (init === 4) {
        console.log ({pacar : jawaban.value})
        botDelay({pacar : jawaban.value})
    }   else if (init === 5) {
        finishing() 
    }   else {
        botEnd()
    }   

}

function botDelay(jawabanUser) {
    console.log ({userData : userData})
    setTimeout(() => {
    pertanyaan.innerHTML = botsay(jawabanUser)[init]
    }, [600] )
    userData.push(jawaban.value)
    jawaban.value = ""

}


function finishing () {
    pertanyaan.innerHTML = `Btw thanks ya ${userData[0]} udh maen bersama botsy, kapan-kapan kita ${userData[2]} bareng ya`
    jawaban.value=""
}

function botEnd () {
    window.location.reload()
}