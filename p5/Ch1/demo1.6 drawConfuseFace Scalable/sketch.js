// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {	
	// 在五个固定位置画5个不同的懵逼脸
	drawConfuseFace(200,140,200,0.3,0.2,0.2);	
	drawConfuseFace(320,280,150,0.1,0.2,0.15);
	drawConfuseFace(100,300,100,0.1,0.3,0.3);
	drawConfuseFace(480,120,220,0.5,0.25,0.25);
	drawConfuseFace(520,340,160,0.7,0.5,0.5);

	// 在鼠标位置画一个懵逼脸
	drawConfuseFace(mouseX,mouseY,120,0.4,0.3,0.12);
}

// 画懵逼脸
function drawConfuseFace(
	posX, posY,  // 脸部中心位置
	faceSize,  // 脸部尺寸
	scaleMouth,  // 嘴巴尺度比例，相对于脸部尺寸
	scaleLEye,  // 左眼尺度比例， 相对于脸部尺寸
	scaleREye) // 右眼尺度比例， 相对于脸部尺寸
{
	//  -------------- 1 画脸 --------------- 
	fill(255);// 填充白色
	ellipse(posX,posY,faceSize,faceSize);// 圆圈
	
	//  -------------- 2 画眼睛 --------------- 
	// 2.1 计算眼睛相对于脸中心点的偏移量
	var EyeOffsetX = 0.2 * faceSize; // 眼睛横向偏移量为脸部尺寸的0.2倍
	var EyeOffsetY = 0 * faceSize; // 眼睛纵向偏移量为脸部尺寸的0倍

	// 2.2 计算眼睛尺寸
	// 左右眼尺寸
	var LEyeSize = faceSize * scaleLEye; 
	var REyeSize = faceSize * scaleREye;
	// 左右眼珠尺寸
	var LIrisSize = LEyeSize * 0.4;
	var RIrisSize = REyeSize * 0.4;
	
	// 2.2 画出左眼	
	fill(255);// 填充白色
	ellipse(
		posX-EyeOffsetX, // 脸的中心位置向左偏移EyeOffsetX
		posY+EyeOffsetY, // 脸的中心位置向下偏移EyeOffsetY
		LEyeSize,
		LEyeSize);
	
	// 2.3 画出右眼	
	fill(255);// 填充白色
	ellipse(
		posX+EyeOffsetX,
		posY+EyeOffsetY,
		REyeSize,
		REyeSize); 	
	
	// 5 左眼珠
	fill(0);// 填充黑色	
	ellipse(
		posX-EyeOffsetX, // 位置与左眼一样
		posY+EyeOffsetY,
		LIrisSize, // 尺寸则采用比左眼小的尺寸
		LIrisSize);
	
	// 6 右眼珠
	fill(0);// 填充黑色	
	ellipse(
		posX+EyeOffsetX,
		posY+EyeOffsetY,
		RIrisSize,
		RIrisSize);	
	
	//  -------------- 3 画嘴巴 ---------------
	// 3.1 计算嘴巴相对于脸部中心位置的偏移量
	var MouthOffsetX = 0.0;
	var MouthOffsetY = 0.3*faceSize;

	// 3.2 计算嘴巴尺寸
	var MouthWidth = faceSize * scaleMouth;
	var MouthHeight = MouthWidth/2.0;
	
	// 3.3 画出嘴巴
	fill(255); // 填充白色
	ellipse(
		posX + MouthOffsetX,
		posY + MouthOffsetY,
		MouthWidth,
		MouthHeight);	
	
	//  -------------- 4 画头发 --------------- 	
	drawOneHair(posX,posY,faceSize,-0.3);
	drawOneHair(posX,posY,faceSize,-0.2);
	drawOneHair(posX,posY,faceSize,-0.1);
	drawOneHair(posX,posY,faceSize,0);
	drawOneHair(posX,posY,faceSize,0.1);
	drawOneHair(posX,posY,faceSize,0.2);
	drawOneHair(posX,posY,faceSize,0.3);
}

// 绘制一根头发
function drawOneHair(
	faceX,faceY, // 脸的中心位置
	faceSize, // 脸的尺寸
	offsetXOnFaceSize) // 头发X坐标的的偏移量，以脸部尺寸为单位尺寸
{
	// ------------- 1 计算尺寸和位置 ---------//
	// 头发相对脸部中心的Y偏移量
	var HairOffsetY = faceSize * 0.3;	
	// 计算X偏移量
	var offsetX = offsetXOnFaceSize * faceSize;
	// 头发长度
	var HairLength = faceSize * 0.4;

	// --------------- 2 画头发 ---------------//
	line(
		faceX - offsetX,
		faceY - HairOffsetY,
		faceX - offsetX,
		faceY - (HairOffsetY + HairLength) );
}