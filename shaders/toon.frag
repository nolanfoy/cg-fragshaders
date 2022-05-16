#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    
    float newColx = round(FragColor.x*4.0) / 4.0;
    float newColy = round(FragColor.y*4.0) / 4.0;
    float newColz = round(FragColor.z*4.0) / 4.0;
    FragColor.x = newColx;
    FragColor.y = newColy;
    FragColor.z = newColz;
}
