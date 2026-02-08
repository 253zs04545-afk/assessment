document.getElementById('thanksButton').addEventListener('click', function() {
    alert('折原先生へ感謝のメッセージを送信しました！（シミュレーション）');
    this.innerText = 'ありがとうございました！';
    this.style.backgroundColor = '#e74c3c';
});