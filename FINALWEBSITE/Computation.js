<script>
    const liquorForms = document.querySelectorAll('form');

    liquorForms.forEach(form =>{
        form.addEventListener('change',updateTotal);
    });

    function updateTotal(){
        let totalPrice = 0;

        liquorForms.forEach(form=>{
            const checkboxes=form.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach(checkbox =>{
                totalPrice +=praseFloat(checkbox.value);
            })
        })
        document.getElementById('totalPrice').textContent = 'Total:${totalPrice}php';
    }
</script>
