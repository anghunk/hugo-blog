// Windows 98 主题 JavaScript 功能

// 全局变量
let startMenuVisible = false;

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeWins98();
});

// 初始化 Windows 98 功能
function initializeWins98() {
    updateClock();
    setInterval(updateClock, 1000);
    initializeWindowDrag();
    initializeStartMenu();
    addWins98Effects();
}

// 更新时钟
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const clockElement = document.getElementById('current-time');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// 切换开始菜单
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    if (startMenu) {
        startMenuVisible = !startMenuVisible;
        if (startMenuVisible) {
            startMenu.classList.add('show');
        } else {
            startMenu.classList.remove('show');
        }
    }
}

// 初始化开始菜单
function initializeStartMenu() {
    document.addEventListener('click', function(event) {
        const startButton = document.querySelector('.start-button');
        const startMenu = document.getElementById('startMenu');
        
        if (startMenu && startButton && !startButton.contains(event.target) && !startMenu.contains(event.target)) {
            startMenuVisible = false;
            startMenu.classList.remove('show');
        }
    });
}

// 初始化窗口拖拽
function initializeWindowDrag() {
    const windows = document.querySelectorAll('.wins98-window');
    
    windows.forEach(window => {
        const titlebar = window.querySelector('.window-titlebar');
        if (titlebar) {
            makeDraggable(window, titlebar);
        }
    });
}

// 使元素可拖拽
function makeDraggable(element, handle) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    handle.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        if (e.target === handle) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, element);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}

// 窗口控制按钮功能
function minimizeWindow(button) {
    const window = button.closest('.wins98-window');
    if (window) {
        window.style.display = 'none';
    }
}

function maximizeWindow(button) {
    const window = button.closest('.wins98-window');
    if (window) {
        if (window.classList.contains('maximized')) {
            window.classList.remove('maximized');
            window.style.width = '';
            window.style.height = '';
            window.style.top = '';
            window.style.left = '';
            button.textContent = '□';
        } else {
            window.classList.add('maximized');
            window.style.width = 'calc(100vw - 40px)';
            window.style.height = 'calc(100vh - 80px)';
            window.style.top = '20px';
            window.style.left = '20px';
            button.textContent = '❐';
        }
    }
}

function closeWindow(button) {
    const window = button.closest('.wins98-window');
    if (window) {
        window.style.display = 'none';
    }
}

// 添加 Windows 98 特效
function addWins98Effects() {
    const buttons = document.querySelectorAll('.wins98-button, .start-button, .taskbar-item');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translate(1px, 1px)';
            this.style.borderColor = 'var(--wins98-button-pressed)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
            this.style.borderColor = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.borderColor = '';
        });
    });
}
