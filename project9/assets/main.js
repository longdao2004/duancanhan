const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//Đối tượng Validator
function Validator(options){
    function getParent(element, selector) {
        while (element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    
    let formElement = document.querySelector(options.form)

    let rulesSelector = {}
    //sử dụng inputs để nhận vào các input đã được nhập sau mỗi lần validate
    let inputs = {}
    //Hàm thực hiện validate
    function validate(inputElement, rule){
        
        let errorMessage 
        let errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector)
       
        //lấy ra các rule của selector
        let rules = rulesSelector[rule.selector]

        //lặp qua từng rule và kiểm tra điểu kiện
        // Nếu có lỗi dừng việc kiểm tra và hiển thị lỗi đầu tiên gặp
        for (let i = 0; i< rules.length;i++){
            switch (inputElement.type){
                case 'checkbox':
                    // nhận về một nodelist các checkbox đc tích, và do nodelist không có các phương thức của array nên cần dùng phương thức như bên dưới
                    inputs[inputElement.name]= Array.prototype.map.call(formElement.querySelectorAll(rule.selector+':checked'),(checkboxItem) =>{
                        return checkboxItem.value
                    })
                    // do value trả về mảng chứa phần tử hoặc rỗng nên cần chuyển đổi sang dạng false để phù hợp với phương thức isRequired
                    if (inputs[inputElement.name].length === 0){
                        errorMessage = rules[i]('')
                    }else {
                        errorMessage = rules[i](inputs[inputElement.name])
                    }
                    break
                case 'radio':
                    // Nhận về giá trị được chọn và trả về null nếu không có radio nào được chọn
                    inputs[inputElement.name] = formElement.querySelector(rule.selector+':checked')?.value
                    errorMessage = rules[i](inputs[inputElement.name] )
                    break
                case 'file':
                    errorMessage = rules[i](inputElement.value)
                    inputs[inputElement.name] = inputElement.files
                    break
                default: 
                    errorMessage = rules[i](inputElement.value)
                    inputs[inputElement.name] = inputElement.value

            }
           
            if (errorMessage){
                break
            }
        }
        if (errorMessage){
            errorElement.textContent = errorMessage
            getParent(inputElement,options.formGroupSelector).classList.add('invalid')
        }else {
            errorElement.textContent = ''
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
       
    }

    if (formElement) {
        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            let isFormValid = true
            //lặp qua từng rules và validate
            options.rules.forEach (rule =>{
                let inputElement = formElement.querySelector(rule.selector)
                let isValid = validate(inputElement,rule)
                if (!isValid) {
                    isFormValid = false;
                }
            })
            
            if (isFormValid){
                //Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function'){
                options.onSubmit(inputs)
                }else{
                    formElement.submit()
                }
            }else{
                console.log(' có lỗi ')
            }
        }
        options.rules.forEach (rule =>{

            //lưu lại rules cho mỗi input
            if(Array.isArray(rulesSelector[rule.selector])){
                rulesSelector[rule.selector].push(rule.test)
            }else{
                rulesSelector[rule.selector] = [rule.test]
            }

           let inputElements = formElement.querySelectorAll(rule.selector)
           Array.from(inputElements).forEach((inputElement) =>{
                if (inputElement){
                    //xử lý khi người dùng blur ra khỏi input
                    inputElement.onblur = function (){
                        validate(inputElement,rule)
                    }
                    //xử lý mỗi khi người dùng nhập input
                    inputElement.oninput = function (){
                        let errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector)
                        errorElement.textContent = ''
                        getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
                    }
                
                }
           })
        })
    }
}

//Định nghĩa rules
//Nguyên tắc của các rules:
//1. Khi có lỗi => Trả ra message lỗi
//2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector,message){
    return {
        selector: selector,
        test: function (value){
            return value ?  undefined : message ||'Vui lòng nhập dữ liệu cho trường này'
        }
    }
}

Validator.isEmail = function(selector,message){
     return {
        selector: selector,
        test: function (inputText){
            return emailRegex.test(inputText) ? undefined  : message ||'Trường này phải là email'

        }
    }
}

Validator.minLength = function(selector,min,message){
    return {
        selector: selector,
        test: function (inputText){
            return inputText.length >= min ? undefined : message ||`Mật khẩu tối thiếu gồm ${min} kí tự`

        }
   }
}

Validator.isConfirmed = function(selector,confirmValue,message){
    return {
        selector: selector,
        test: function (inputText){
            return inputText === confirmValue() ? undefined : message || `Gia trị nhập vào chưa chính xác`

        }
   }
}