/**
 * 公共工具函数
 */

// 工具函数：转义 HTML
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// 工具函数：格式化 JSON
function formatJSON(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return JSON.stringify(obj, null, 2);
    } catch (e) {
        throw new Error('无效的 JSON 格式');
    }
}

// 工具函数：复制到剪贴板
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (e) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// 工具函数：显示通知
function showNotification(message, type = 'info') {
    // 检查是否已存在通知，避免重叠
    const existingNotifications = document.querySelectorAll('.notification');
    const notificationCount = existingNotifications.length;
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 位置：水平居中，垂直位置在上方
    const topOffset = 20 + (notificationCount * 70); // 从顶部开始，每个通知间距 70px
    
    notification.style.cssText = `
        position: fixed;
        top: ${topOffset}px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.875rem 1.5rem;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: fadeInScale 0.3s ease;
        max-width: min(400px, calc(100vw - 40px));
        font-size: 0.875rem;
        color: var(--text-primary);
        word-wrap: break-word;
        text-align: center;
        pointer-events: none;
    `;
    
    // 根据类型添加颜色和图标
    let iconSvg = '';
    if (type === 'success') {
        notification.style.borderLeft = '3px solid var(--success-text)';
        notification.style.backgroundColor = 'var(--success-bg)';
        iconSvg = '<svg style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (type === 'error') {
        notification.style.borderLeft = '3px solid var(--error-text)';
        notification.style.backgroundColor = 'var(--error-bg)';
        iconSvg = '<svg style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else if (type === 'warning') {
        notification.style.borderLeft = '3px solid var(--warning-text)';
        notification.style.backgroundColor = 'var(--warning-bg)';
        iconSvg = '<svg style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
    } else {
        notification.style.borderLeft = '3px solid var(--primary)';
        iconSvg = '<svg style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }
    
    notification.innerHTML = iconSvg + escapeHtml(message);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOutScale 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000); // 显示时间 2 秒
}

// 添加动画样式
if (!document.getElementById('common-animations')) {
    const style = document.createElement('style');
    style.id = 'common-animations';
    style.textContent = `
        @keyframes fadeInScale {
            from {
                transform: translateX(-50%) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
        @keyframes fadeOutScale {
            from {
                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) scale(0.8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

