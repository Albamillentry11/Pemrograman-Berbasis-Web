function tampilkamar(Ruang)
{
    var Kamar = "";
    switch (Ruang)
    {
        case "R. ANGGREK BEDAH" : 
            {
                Kamar = "<ul> \
                            <li>R. ANGGREK BEDAH: I</li> \
                            <li>R. ANGGREK BEDAH: II-A</li> \
                            <li>R. ANGGREK BEDAH: II-B</li> \
                            <li>R. ANGGREK BEDAH: III</li> \
                            <li>R. ANGGREK BEDAH: VIP</li> \
                        </ul";
            }break;

        case "R. BOUGENVILLE OBSGYN" : 
            {
                Kamar = "<ul> \
                            <li>R. BOUGENVILLE OBSGYN: I</li> \
                            <li>R. BOUGENVILLE OBSGYN: II-A</li> \
                            <li>R. BOUGENVILLE OBSGYN: II-B</li> \
                            <li>R. BOUGENVILLE OBSGYN: III</li> \
                            <li>R. BOUGENVILLE OBSGYN: VIP</li> \
                        </ul";
            }break;

        case "R. CEMPAKA" : 
            {
                Kamar = "<ul> \
                            <li>R. CEMPAKA: I</li> \
                            <li>R. CEMPAKA: II-A</li> \
                            <li>R. CEMPAKA: II-B</li> \
                            <li>R. CEMPAKA: III</li> \
                            <li>R. CEMPAKA: VIP</li> \
                        </ul";
            }break;

        case "R. DAHLIA ANAK-ANAK" : 
            {
                Kamar = "<ul> \
                            <li>R. DAHLIA ANAK-ANAK: I</li> \
                            <li>R. DAHLIA ANAK-ANAK: II-A</li> \
                            <li>R. DAHLIA ANAK-ANAK: II-B</li> \
                            <li>R. DAHLIA ANAK-ANAK: III</li> \
                            <li>R. DAHLIA ANAK-ANAK: VIP</li> \
                        </ul";
            }break;

        default : Kamar = "";
    }
    document.getElementById('Kamar').innerHTML =  Kamar;
}