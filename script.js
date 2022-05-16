console.log('Javascript loaded')

var cpf = document.getElementById('cpf_digitado').value;

function validacao() {
    console.log('Loading CPF validation')
    //cleaning possible previous alerts
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    var resultadoValidacao = validaCPF(cpf);
    //showing alert to the user
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } 
    if (cpf == '') {
        return false;
    }
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
            return false;
        } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;

        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        // This logic was created by the brazilian government
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // First digit validation
        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Second digit validation
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
}

