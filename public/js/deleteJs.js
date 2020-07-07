function deleteBtn(id){
    $('#deleteForm').attr('action', '/'+id+'?_method=DELETE');
    $('#deleteForm').submit();
}