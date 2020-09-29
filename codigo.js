function array(a,b){
    a = document.getElementById('campoN1').value
    b = document.getElementById('campoN2').value
    n1 = Number.parseInt(a)
    n2 = Number.parseInt(b)

    console.log(n1,n2)
    let vouchers = []
    for(inicio = n1; inicio<=n2; inicio++){
        console.log(inicio)
    
    vouchers.push(inicio)
    
    }
    console.log(vouchers)
}

let botaoVoucher = document.getElementById('botaoAddVouchers').addEventListener('click',array)

function voucherID(){
    
    let nomedoCliente = document.getElementById('nomeCliente').value
    let NumerodoVoucher = document.getElementById('voucherCliente').value
    let voucherConvertido = Number.parseInt(NumerodoVoucher)
    console.log(cadastroClienteVoucher)
    cadastroClienteVoucher.push([{"Nome":nomedoCliente, "Voucher":voucherConvertido}])
    
    
}
let cadastroClienteVoucher = [{}]
let botaoVoucherID = document.getElementById('botaoVouchersId').addEventListener('click',voucherID)
