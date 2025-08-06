// 이미지 데이터 (실제 프로젝트에서는 서버에서 가져옵니다)
let images = [
    {
        id: 1,
        title: "아름다운 자연 풍경",
        description: "푸른 하늘과 초록빛 산들이 어우러진 아름다운 자연 풍경입니다. 이 이미지는 자연의 아름다움을 담아내어 마음을 평화롭게 만들어줍니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        tags: ["자연", "풍경", "산", "하늘", "평화"],
        downloads: 245,
        likes: 89,
        views: 1234,
        uploadDate: "2024-01-15"
    },
    {
        id: 2,
        title: "도시의 밤",
        description: "빛나는 네온사인과 고층빌딩들이 어우러진 도시의 야경입니다. 현대 도시의 화려함과 활기를 담아낸 작품입니다.",
        category: "city",
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop",
        tags: ["도시", "야경", "네온", "빌딩", "밤"],
        downloads: 189,
        likes: 67,
        views: 987,
        uploadDate: "2024-01-14"
    },
    {
        id: 3,
        title: "행복한 가족",
        description: "따뜻한 햇살 아래 행복한 가족의 모습을 담았습니다. 사랑과 웃음이 가득한 순간을 포착했습니다.",
        category: "people",
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        tags: ["가족", "행복", "사랑", "웃음", "따뜻함"],
        downloads: 156,
        likes: 123,
        views: 756,
        uploadDate: "2024-01-13"
    },
    {
        id: 4,
        title: "추상적 예술",
        description: "색채와 형태가 자유롭게 어우러진 추상적인 예술 작품입니다. 상상력을 자극하는 독특한 구성입니다.",
        category: "abstract",
        src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        tags: ["추상", "예술", "색채", "형태", "창의성"],
        downloads: 98,
        likes: 45,
        views: 432,
        uploadDate: "2024-01-12"
    },
    {
        id: 5,
        title: "바다의 평화",
        description: "잔잔한 파도와 하늘의 구름이 조화를 이루는 평화로운 바다 풍경입니다. 마음을 진정시켜주는 아름다운 순간입니다.",
        category: "nature",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        tags: ["바다", "평화", "파도", "구름", "휴식"],
        downloads: 234,
        likes: 78,
        views: 1456,
        uploadDate: "2024-01-11"
    }
];

let currentImageId = null;

// 댓글 데이터 (실제 프로젝트에서는 서버에서 가져옵니다)
let comments = {
    1: [
        {
            id: 1,
            author: "김철수",
            content: "정말 아름다운 자연 풍경이네요! 마음이 평화로워집니다.",
            date: "2024-01-15T10:30:00",
            likes: 5,
            replies: [
                {
                    id: 1,
                    author: "이영희",
                    content: "저도 같은 생각이에요! 정말 멋진 사진입니다.",
                    date: "2024-01-15T11:00:00",
                    likes: 2
                }
            ]
        },
        {
            id: 2,
            author: "박민수",
            content: "어디서 찍으신 건가요? 직접 가보고 싶어요.",
            date: "2024-01-15T09:15:00",
            likes: 3,
            replies: []
        }
    ],
    2: [
        {
            id: 3,
            author: "최지영",
            content: "도시의 밤이 정말 화려하네요! 네온사인이 예뻐요.",
            date: "2024-01-14T20:45:00",
            likes: 8,
            replies: []
        }
    ],
    3: [
        {
            id: 4,
            author: "정수진",
            content: "가족의 따뜻함이 느껴지는 사진이네요. 정말 행복해 보여요!",
            date: "2024-01-13T15:20:00",
            likes: 12,
            replies: []
        }
    ]
};

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 테마 초기화
    initializeTheme();
    
    // URL에서 이미지 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = parseInt(urlParams.get('id'));
    
    if (imageId) {
        loadImageDetail(imageId);
    } else {
        // 이미지 ID가 없으면 첫 번째 이미지 로드
        loadImageDetail(1);
    }
    
    // 댓글 관련 이벤트 리스너 설정
    setupCommentEventListeners();
    
    // 테마 토글 버튼 이벤트 리스너
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 모바일 메뉴 토글
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // 모바일 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
});

// 이미지 상세 정보 로드
function loadImageDetail(imageId) {
    const image = images.find(img => img.id === imageId);
    if (!image) {
        showError('이미지를 찾을 수 없습니다.');
        return;
    }
    
    currentImageId = imageId;
    
    // 이미지 정보 설정
    document.getElementById('detailImage').src = image.src;
    document.getElementById('detailImage').alt = image.title;
    document.getElementById('detailTitle').textContent = image.title;
    document.getElementById('detailDescription').textContent = image.description;
    document.getElementById('detailCategory').textContent = getCategoryName(image.category);
    document.getElementById('detailDate').textContent = formatDate(image.uploadDate);
    
    // 통계 정보 설정
    document.getElementById('downloadCount').textContent = image.downloads;
    document.getElementById('likeCount').textContent = image.likes;
    document.getElementById('viewCount').textContent = image.views;
    
    // 태그 설정
    renderTags(image.tags);
    
    // 관련 이미지 설정
    renderRelatedImages(image.category, imageId);
    
    // 댓글 렌더링
    renderComments(imageId);
    
    // 페이지 제목 업데이트
    document.title = `${image.title} - 이미지 공유 갤러리`;
}

// 카테고리 이름 변환
function getCategoryName(category) {
    const categoryNames = {
        'nature': '자연',
        'city': '도시',
        'people': '사람',
        'abstract': '추상'
    };
    return categoryNames[category] || category;
}

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 태그 렌더링
function renderTags(tags) {
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
}

// 관련 이미지 렌더링
function renderRelatedImages(category, currentId) {
    const relatedImages = images.filter(img => 
        img.category === category && img.id !== currentId
    ).slice(0, 4);
    
    const relatedGallery = document.getElementById('relatedGallery');
    
    if (relatedImages.length === 0) {
        relatedGallery.innerHTML = '<p>관련 이미지가 없습니다.</p>';
        return;
    }
    
    relatedGallery.innerHTML = relatedImages.map(image => `
        <div class="related-item" onclick="goToDetail(${image.id})">
            <img src="${image.src}" alt="${image.title}">
            <div class="related-item-info">
                <h4>${image.title}</h4>
            </div>
        </div>
    `).join('');
}

// 상세페이지로 이동
function goToDetail(imageId) {
    window.location.href = `detail.html?id=${imageId}`;
}

// 이미지 다운로드
function downloadImage() {
    if (!currentImageId) return;
    
    const image = images.find(img => img.id === currentImageId);
    if (image) {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `${image.title}.jpg`;
        link.click();
        
        // 다운로드 수 증가
        image.downloads++;
        document.getElementById('downloadCount').textContent = image.downloads;
        
        showNotification('이미지가 다운로드되었습니다!', 'success');
    }
}

// 이미지 공유
function shareImage() {
    if (!currentImageId) return;
    
    const image = images.find(img => img.id === currentImageId);
    if (image && navigator.share) {
        navigator.share({
            title: image.title,
            text: image.description,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(`${image.title}\n${image.description}\n${window.location.href}`);
        showNotification('링크가 클립보드에 복사되었습니다!', 'info');
    }
}

// 이미지 좋아요
function likeImage() {
    if (!currentImageId) return;
    
    const image = images.find(img => img.id === currentImageId);
    if (image) {
        image.likes++;
        document.getElementById('likeCount').textContent = image.likes;
        
        const likeBtn = document.querySelector('.action-btn:last-child');
        likeBtn.classList.add('liked');
        
        showNotification('좋아요를 눌렀습니다!', 'success');
    }
}

// 에러 표시
function showError(message) {
    const detailContent = document.querySelector('.detail-content');
    detailContent.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>오류가 발생했습니다</h2>
            <p>${message}</p>
            <a href="index.html" class="btn-primary">홈으로 돌아가기</a>
        </div>
    `;
}

// 알림 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    let backgroundColor;
    switch (type) {
        case 'success':
            backgroundColor = '#4CAF50';
            break;
        case 'error':
            backgroundColor = '#f44336';
            break;
        default:
            backgroundColor = '#2196F3';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 댓글 이벤트 리스너 설정
function setupCommentEventListeners() {
    const submitCommentBtn = document.getElementById('submitComment');
    const commentInput = document.getElementById('commentInput');
    
    if (submitCommentBtn) {
        submitCommentBtn.addEventListener('click', submitComment);
    }
    
    if (commentInput) {
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                submitComment();
            }
        });
    }
}

// 댓글 렌더링
function renderComments(imageId) {
    const commentsList = document.getElementById('commentsList');
    const imageComments = comments[imageId] || [];
    
    if (imageComments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!</p>';
        return;
    }
    
    commentsList.innerHTML = imageComments.map(comment => `
        <div class="comment-item" data-comment-id="${comment.id}">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${formatCommentDate(comment.date)}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
            <div class="comment-actions">
                <button class="comment-action-btn" onclick="likeComment(${imageId}, ${comment.id})">
                    <i class="fas fa-heart"></i> 좋아요 (${comment.likes})
                </button>
                <button class="comment-action-btn" onclick="showReplyForm(${comment.id})">
                    <i class="fas fa-reply"></i> 답글
                </button>
            </div>
            ${comment.replies.length > 0 ? renderReplies(comment.replies) : ''}
            <div class="comment-reply-form" id="replyForm${comment.id}">
                <textarea class="comment-reply-input" placeholder="답글을 작성해주세요..."></textarea>
                <div class="comment-reply-buttons">
                    <button class="comment-reply-btn comment-reply-submit" onclick="submitReply(${imageId}, ${comment.id})">답글 작성</button>
                    <button class="comment-reply-btn comment-reply-cancel" onclick="hideReplyForm(${comment.id})">취소</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 답글 렌더링
function renderReplies(replies) {
    return `
        <div class="comment-replies" style="margin-left: 2rem; margin-top: 1rem;">
            ${replies.map(reply => `
                <div class="comment-item" style="background: rgba(255, 255, 255, 0.5); border-left-color: #764ba2;">
                    <div class="comment-header">
                        <span class="comment-author">${reply.author}</span>
                        <span class="comment-date">${formatCommentDate(reply.date)}</span>
                    </div>
                    <div class="comment-content">${reply.content}</div>
                    <div class="comment-actions">
                        <button class="comment-action-btn" onclick="likeReply(${reply.id})">
                            <i class="fas fa-heart"></i> 좋아요 (${reply.likes})
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 댓글 작성
function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const content = commentInput.value.trim();
    
    if (!content) {
        showNotification('댓글 내용을 입력해주세요.', 'error');
        return;
    }
    
    if (!currentImageId) return;
    
    // 새 댓글 생성
    const newComment = {
        id: Date.now(),
        author: "익명 사용자", // 실제로는 로그인된 사용자 정보 사용
        content: content,
        date: new Date().toISOString(),
        likes: 0,
        replies: []
    };
    
    // 댓글 배열에 추가
    if (!comments[currentImageId]) {
        comments[currentImageId] = [];
    }
    comments[currentImageId].unshift(newComment);
    
    // 댓글 목록 다시 렌더링
    renderComments(currentImageId);
    
    // 입력 필드 초기화
    commentInput.value = '';
    
    showNotification('댓글이 작성되었습니다!', 'success');
}

// 답글 폼 표시/숨김
function showReplyForm(commentId) {
    const replyForm = document.getElementById(`replyForm${commentId}`);
    if (replyForm) {
        replyForm.classList.add('active');
    }
}

function hideReplyForm(commentId) {
    const replyForm = document.getElementById(`replyForm${commentId}`);
    if (replyForm) {
        replyForm.classList.remove('active');
        const replyInput = replyForm.querySelector('.comment-reply-input');
        if (replyInput) {
            replyInput.value = '';
        }
    }
}

// 답글 작성
function submitReply(imageId, commentId) {
    const replyForm = document.getElementById(`replyForm${commentId}`);
    const replyInput = replyForm.querySelector('.comment-reply-input');
    const content = replyInput.value.trim();
    
    if (!content) {
        showNotification('답글 내용을 입력해주세요.', 'error');
        return;
    }
    
    const comment = comments[imageId].find(c => c.id === commentId);
    if (!comment) return;
    
    // 새 답글 생성
    const newReply = {
        id: Date.now(),
        author: "익명 사용자",
        content: content,
        date: new Date().toISOString(),
        likes: 0
    };
    
    // 답글 추가
    comment.replies.push(newReply);
    
    // 댓글 목록 다시 렌더링
    renderComments(imageId);
    
    // 답글 폼 숨김
    hideReplyForm(commentId);
    
    showNotification('답글이 작성되었습니다!', 'success');
}

// 댓글 좋아요
function likeComment(imageId, commentId) {
    const comment = comments[imageId].find(c => c.id === commentId);
    if (comment) {
        comment.likes++;
        renderComments(imageId);
        showNotification('좋아요를 눌렀습니다!', 'success');
    }
}

// 답글 좋아요
function likeReply(replyId) {
    // 모든 이미지의 댓글에서 답글 찾기
    for (let imageId in comments) {
        for (let comment of comments[imageId]) {
            const reply = comment.replies.find(r => r.id === replyId);
            if (reply) {
                reply.likes++;
                renderComments(parseInt(imageId));
                showNotification('좋아요를 눌렀습니다!', 'success');
                return;
            }
        }
    }
}

// 댓글 날짜 포맷팅
function formatCommentDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) {
        return '방금 전';
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
    } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours}시간 전`;
    } else {
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// 테마 초기화
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// 테마 설정
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 테마 토글 버튼 아이콘 업데이트
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// 테마 토글
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // 테마 변경 알림
    const themeName = newTheme === 'dark' ? '다크 모드' : '라이트 모드';
    showNotification(`${themeName}로 변경되었습니다!`, 'success');
}

// 모바일 메뉴 토글
function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

// 모바일 메뉴 열기
function openMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모바일 메뉴 닫기
function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 