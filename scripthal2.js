const tmblMenuList = document.querySelectorAll('.TombolMenu');

tmblMenuList.forEach(tmblMenu =>{
    tmblMenu.addEventListener('click', () => {
        document.querySelector('.TombolTekan')?.classList.remove('TombolTekan');
        tmblMenu.classList.add('TombolTekan')
    })

})

const tmblSp = document.getElementById('Sp');
const tmblMd = document.getElementById('Md');
const spForm = document.getElementById('Support');
const mdForm = document.getElementById('mediaShare');

tmblSp.addEventListener('click', function() {
  spForm.style.display = 'block';
  mdForm.style.display = 'none';
});

tmblMd.addEventListener('click', function() {
  spForm.style.display = 'none';
  mdForm.style.display = 'block';
});

