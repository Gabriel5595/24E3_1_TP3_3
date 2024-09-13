liToggle.addEventListener('click', _ => {
    const menuEstaAtivo = uiAside.classList.contains('asideContainerActive');
    if (menuEstaAtivo) {
        uiAside.classList.remove('asideContainerActive');
        uiAside.classList.add('asideContainer');
        aToggle.innerText = 'Menu';
    } else {
        uiAside.classList.remove('asideContainer');
        uiAside.classList.add('asideContainerActive');
        aToggle.innerText = 'x';
    }
});
