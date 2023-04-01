let option, input

const displayMessage = message => {
    document.getElementsByTagName('footer')[0].innerHTML = message
    if (message.includes('Invalid')) {
        document.getElementsByTagName('footer')[0].style.color = 'red'
    }
    else document.getElementsByTagName('footer')[0].style.color = 'green'
}

const section = document.querySelectorAll('section')

for (let i = 0; i < section.length; i++) {
    section[i].addEventListener('click', () => {
        option = section[i].innerHTML
        switch (i) {
            case 0:
                input = prompt()
                if (/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(input)) {
                    displayMessage(`Your ${option} '${input}' is Valid`)
                } else displayMessage(`Your ${option} '${input}' is Invalid`)
                break
            case 1:
                input = prompt()
                if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input)) {
                    displayMessage(`Your ${option} '${input}' is Valid`)
                } else displayMessage(`Your ${option} '${input}' is Invalid`)
                break
            case 2:
                input = prompt('BD Mobile Number Only')
                if (/^(\+88)?(88)?01[3-9]([0-9]){8}$/.test(input)) {
                    displayMessage(`Your ${option} '${input}' is Valid`)
                } else displayMessage(`Your ${option} '${input}' is Invalid`)
                break
            case 3:
                input = prompt('at least 1 uppercase, 1 lowercase, 1 number and minimum length 8')
                if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/g.test(input)) {
                    displayMessage(`Your ${option} '${input}' is Valid`)
                } else displayMessage(`Your ${option} '${input}' is Invalid`)
                break
            case 4:
                input = prompt()
                if (/^\d{4}$/.test(input)) {
                    displayMessage(`Your ${option} '${input}' is Valid`)
                } else displayMessage(`Your ${option} '${input}' is Invalid`)
                break
        }
    })
}