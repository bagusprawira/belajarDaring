angular.module('app.peringkatAndaUjianOnlineSiswaOrangTua', [])

    .controller('peringkatAndaUjianOnlineSiswaOrangTuaCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$ionicPopup', '$ionicLoading', '$state', '$ionicModal', '$ionicActionSheet', '$timeout', '$filter', function ($scope, $stateParams, $firebaseArray, $firebaseObject, $ionicPopup, $ionicLoading, $state, $ionicModal, $ionicActionSheet, $timeout, $filter) {

        $scope.idPenggunaSiswa = localStorage.getItem('idPenggunaSiswa');
        $scope.namaPenggunaSiswa = localStorage.getItem('namaPenggunaSiswa');
        $scope.emailSiswa = localStorage.getItem('emailSiswa');
        $scope.uidSiswa = localStorage.getItem('uidSiswa');
        $scope.idSekolahSiswa = localStorage.getItem('idSekolahSiswa');
        $scope.jenjangSiswa = localStorage.getItem('jenjangSiswa');
        $scope.idProvinsiSiswa = localStorage.getItem('idProvinsiSiswa');
        $scope.idKotaKabupatenSiswa = localStorage.getItem('idKotaKabupatenSiswa');
        $scope.idKecamatanSiswa = localStorage.getItem('idKecamatanSiswa');
        $scope.kodeSekolah = localStorage.getItem('kodeSekolah')

       
        if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP1") { var app = app_smpn1dps; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J1") { var app = app_smpn2; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J8") { var app = app_smpn3; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J9") { var app = app_smpn4; }
        else if ($scope.idSekolahSiswa=== "-MPyF17P3CjaG3Am7g9J10") { var app = app_smpn5; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw1") { var app = app_smpn6; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj1") { var app = app_smpn7; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP6") { var app = app_smpn8; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw13") { var app = app_smpn9; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J6") { var app = app_smpn10; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw12") { var app = app_smpn11; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J7") { var app = app_smpn12; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj8") { var app = app_smpn13; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP5") { var app = app_smpn14; }
        else if ($scope.idSekolahSiswa === "-MPyROcy6xPWAnYTzci8") { var app = app_lentera; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J3") { var app = app_dharmapraja; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj5") { var app = app_harapanmulia; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw8") { var app = app_kusumasari; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw24") { var app = app_pelitahati; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj11") { var app = app_pgri1; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP10") { var app = app_rajyamuna; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP12") { var app = app_siladharma; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J17") { var app = app_tamanrama; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP13") { var app = app_tawakkal; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj14") { var app = app_sapta; }


        if (!$scope.idPenggunaSiswa) {
            $state.go('welcome');
        }

        $scope.data = {
            "idUjian": $stateParams.idUjian,
            "namaUjian": $stateParams.namaUjian,
            "jenjang": $stateParams.jenjang,
            "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
            "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
            "namaProvinsi": $stateParams.namaProvinsi,
            "semester": $stateParams.semester,
            "tahunAjaran": $stateParams.tahunAjaran,
            "totalSiswaLolos": $stateParams.totalSiswaLolos,
        };
        //console.log($scope.data);

        var ref = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa").orderByChild("idUjian").equalTo($scope.data.idUjian);
        var listRef = $firebaseArray(ref);

        $ionicLoading.show();
        listRef.$loaded().then(function (response) {
            $ionicLoading.hide();
            $scope.peringkat = response;
            //console.log(response);
        });

        $scope.dataNilaiSiswa = function (data) {
            //console.log(data);
            $state.go("menuOrangTua.nilaiSiswaUjianOnlineSiswaOrangTua", {
                "idUjian": $stateParams.idUjian,
                "namaUjian": $stateParams.namaUjian,
                "jenjang": $stateParams.jenjang,
                "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
                "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
                "namaProvinsi": $stateParams.namaProvinsi,
                "semester": $stateParams.semester,
                "tahunAjaran": $stateParams.tahunAjaran,
                "idRekapJawabanUjianOnlineSiswa": data.$id,
                "namaPengguna": data.namaPengguna,
                "uid": data.uid,
            })

        };

    }])

    .controller('nilaiSiswaUjianOnlineSiswaOrangTuaCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$ionicPopup', '$ionicLoading', '$state', '$ionicModal', '$ionicActionSheet', '$timeout', '$filter', function ($scope, $stateParams, $firebaseArray, $firebaseObject, $ionicPopup, $ionicLoading, $state, $ionicModal, $ionicActionSheet, $timeout, $filter) {

        $scope.idPenggunaSiswa = localStorage.getItem('idPenggunaSiswa');
        $scope.namaPenggunaSiswa = localStorage.getItem('namaPenggunaSiswa');
        $scope.emailSiswa = localStorage.getItem('emailSiswa');
        $scope.uidSiswa = localStorage.getItem('uidSiswa');
        $scope.idSekolahSiswa = localStorage.getItem('idSekolahSiswa');
        $scope.jenjangSiswa = localStorage.getItem('jenjangSiswa');
        $scope.idProvinsiSiswa = localStorage.getItem('idProvinsiSiswa');
        $scope.idKotaKabupatenSiswa = localStorage.getItem('idKotaKabupatenSiswa');
        $scope.idKecamatanSiswa = localStorage.getItem('idKecamatanSiswa');
        $scope.kodeSekolah = localStorage.getItem('kodeSekolah')
        
       
        if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP1") { var app = app_smpn1dps; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J1") { var app = app_smpn2; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J8") { var app = app_smpn3; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J9") { var app = app_smpn4; }
        else if ($scope.idSekolahSiswa=== "-MPyF17P3CjaG3Am7g9J10") { var app = app_smpn5; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw1") { var app = app_smpn6; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj1") { var app = app_smpn7; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP6") { var app = app_smpn8; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw13") { var app = app_smpn9; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J6") { var app = app_smpn10; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw12") { var app = app_smpn11; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J7") { var app = app_smpn12; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj8") { var app = app_smpn13; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP5") { var app = app_smpn14; }
        else if ($scope.idSekolahSiswa === "-MPyROcy6xPWAnYTzci8") { var app = app_lentera; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J3") { var app = app_dharmapraja; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj5") { var app = app_harapanmulia; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw8") { var app = app_kusumasari; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw24") { var app = app_pelitahati; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj11") { var app = app_pgri1; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP10") { var app = app_rajyamuna; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP12") { var app = app_siladharma; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J17") { var app = app_tamanrama; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP13") { var app = app_tawakkal; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj14") { var app = app_sapta; }


        if (!$scope.idPenggunaSiswa) {
            $state.go('welcome');
        }

        $scope.data = {
            "idUjian": $stateParams.idUjian,
            "namaUjian": $stateParams.namaUjian,
            "jenjang": $stateParams.jenjang,
            "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
            "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
            "namaProvinsi": $stateParams.namaProvinsi,
            "semester": $stateParams.semester,
            "tahunAjaran": $stateParams.tahunAjaran,
            "idRekapJawabanUjianOnlineSiswa": $stateParams.idRekapJawabanUjianOnlineSiswa,
            "namaPengguna": $stateParams.namaPengguna,
            "uid": $stateParams.uid
        };
        //console.log($scope.data);

        var ref = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa/" + $scope.data.idRekapJawabanUjianOnlineSiswa);
        $scope.formData = $firebaseObject(ref);

        var refNilai = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa/" + $scope.data.idRekapJawabanUjianOnlineSiswa + "/pelajaran");
        var listRefNilai = $firebaseArray(refNilai);

        $ionicLoading.show();
        listRefNilai.$loaded().then(function (response) {
            $ionicLoading.hide();
            $scope.nilai = response;
        });

        $scope.nilaiTotal = 0;
        $scope.dataArray = [];
        listRefNilai.$loaded().then(function (response) {
            for (i = 0; i < response.length; i++) {
                if (response[i].nilai !== undefined) {
                    $scope.dataArray.push({
                        "data": response[i].nilai
                    });
                    var penilaian = response[i].nilai;
                    $scope.nilaiTotal = $scope.nilaiTotal + penilaian;
                    $scope.avg = $scope.nilaiTotal / $scope.dataArray.length;
                    // console.log("total Nilai", $scope.nilaiTotal);
                    // console.log("avg", $scope.avg);
                    var updateNilaiRata = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa/" + $scope.data.idRekapJawabanUjianOnlineSiswa);

                    updateNilaiRata.update(JSON.parse(JSON.stringify({
                        "jumlahNilai": $scope.nilaiTotal,
                        "rataRata": $scope.avg,
                    }))).then(function (resp) {
                        // console.log("jumlahSoalUpdate", $scope.jumlahSoal);
                    });
                }

            }

        });

        $scope.goToNilai = function (data) {
            // console.log("datanya", data);
            var getData = firebase.database(app).ref("jawabanUjianOnlineSiswaPerPelajaran").orderByChild("filter").equalTo($stateParams.idUjian + "_" + data.idPelajaranUjianOnline + "_" + $scope.data.uid);
            getData.on("child_added", function (snapshot) {
                // console.log(snapshot.val());
                $state.go("menuOrangTua.nilaiUjianOnlineSiswaOrangTua", {
                    "idUjian": $stateParams.idUjian,
                    "namaUjian": $stateParams.namaUjian,
                    "jenjang": $stateParams.jenjang,
                    "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
                    "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
                    "namaProvinsi": $stateParams.namaProvinsi,
                    "semester": $stateParams.semester,
                    "tahunAjaran": $stateParams.tahunAjaran,
                    "idPelajaranUjianOnline": data.idPelajaranUjianOnline,
                    "idPelajaran": data.idPelajaran,
                    "pelajaran": data.pelajaran,
                    "statusFinish": snapshot.val().statusFinish,
                    "idJawabanUjianOnlineSiswaPerPelajaran": snapshot.key,
                    "idRekapJawabanUjianOnlineSiswa": $stateParams.idRekapJawabanUjianOnlineSiswa,
                    "namaPengguna": $stateParams.namaPengguna,
                    "uid": $stateParams.uid
                });
            });

        };

    }])

    .controller('nilaiSiswaDetailUjianOnlineSiswaOrangTuaCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$ionicPopup', '$ionicLoading', '$state', '$ionicModal', '$ionicActionSheet', '$timeout', '$filter', function ($scope, $stateParams, $firebaseArray, $firebaseObject, $ionicPopup, $ionicLoading, $state, $ionicModal, $ionicActionSheet, $timeout, $filter) {

        $scope.idPenggunaSiswa = localStorage.getItem('idPenggunaSiswa');
        $scope.namaPenggunaSiswa = localStorage.getItem('namaPenggunaSiswa');
        $scope.emailSiswa = localStorage.getItem('emailSiswa');
        $scope.uidSiswa = localStorage.getItem('uidSiswa');
        $scope.idSekolahSiswa = localStorage.getItem('idSekolahSiswa');
        $scope.jenjangSiswa = localStorage.getItem('jenjangSiswa');
        $scope.idProvinsiSiswa = localStorage.getItem('idProvinsiSiswa');
        $scope.idKotaKabupatenSiswa = localStorage.getItem('idKotaKabupatenSiswa');
        $scope.idKecamatanSiswa = localStorage.getItem('idKecamatanSiswa');
        $scope.kodeSekolah = localStorage.getItem('kodeSekolah')

       
        if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP1") { var app = app_smpn1dps; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J1") { var app = app_smpn2; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J8") { var app = app_smpn3; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J9") { var app = app_smpn4; }
        else if ($scope.idSekolahSiswa=== "-MPyF17P3CjaG3Am7g9J10") { var app = app_smpn5; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw1") { var app = app_smpn6; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj1") { var app = app_smpn7; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP6") { var app = app_smpn8; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw13") { var app = app_smpn9; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J6") { var app = app_smpn10; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw12") { var app = app_smpn11; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J7") { var app = app_smpn12; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj8") { var app = app_smpn13; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP5") { var app = app_smpn14; }
        else if ($scope.idSekolahSiswa === "-MPyROcy6xPWAnYTzci8") { var app = app_lentera; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J3") { var app = app_dharmapraja; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj5") { var app = app_harapanmulia; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw8") { var app = app_kusumasari; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw24") { var app = app_pelitahati; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj11") { var app = app_pgri1; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP10") { var app = app_rajyamuna; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP12") { var app = app_siladharma; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J17") { var app = app_tamanrama; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP13") { var app = app_tawakkal; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj14") { var app = app_sapta; }



        if (!$scope.idPenggunaSiswa) {
            $state.go('welcome');
        }

        $scope.data = {
            "idUjian": $stateParams.idUjian,
            "namaUjian": $stateParams.namaUjian,
            "jenjang": $stateParams.jenjang,
            "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
            "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
            "namaProvinsi": $stateParams.namaProvinsi,
            "semester": $stateParams.semester,
            "tahunAjaran": $stateParams.tahunAjaran,
            "idPelajaranUjianOnline": $stateParams.idPelajaranUjianOnline,
            "idPelajaran": $stateParams.idPelajaran,
            "pelajaran": $stateParams.pelajaran,
            "statusFinish": $stateParams.statusFinish,
            "idJawabanUjianOnlineSiswaPerPelajaran": $stateParams.idJawabanUjianOnlineSiswaPerPelajaran,
            "idRekapJawabanUjianOnlineSiswa": $stateParams.idRekapJawabanUjianOnlineSiswa,
            "namaPengguna": $stateParams.namaPengguna,
            "uid": $stateParams.uid
        };


        if ($scope.data.statusFinish === false) {
            //Pengaturan Umum Ujian
            var refPengaturanUmum = firebase.database(app).ref("pengaturanUmumUjianOnline").orderByChild("filter").equalTo($stateParams.idUjian + "_" + $stateParams.idPelajaranUjianOnline);
            refPengaturanUmum.on("child_added", function (snapshot) {
                $scope.soalAcak = snapshot.val().soalAcak;
                $scope.nilaiMaksimum = snapshot.val().nilaiMaksimum * 1;
                $scope.jumlahSoal = snapshot.val().jumlahSoal * 1;
                $scope.bobotNilai = snapshot.val().nilaiMaksimum * 1 / snapshot.val().jumlahSoal * 1;

            });

            //Menghitung Nilai Per Pelajaran
            var hitungNilai = firebase.database(app).ref("jawabanUjianOnlineSiswa").orderByChild("filter").equalTo($stateParams.idUjian + "_" + $stateParams.idPelajaranUjianOnline + "_" + $scope.data.uid);
            var listHitungNilai = $firebaseArray(hitungNilai);

            $scope.totalNilai = 0;
            $scope.statusJawabanBenar = 0;
            $scope.statusJawabanSalah = 0;
            listHitungNilai.$loaded().then(function (response) {
                for (i = 0; i < response.length; i++) {
                    $scope.totalNilai = $scope.totalNilai + response[i].bobotNilai;
                    $scope.statusJawabanBenar = $scope.statusJawabanBenar + response[i].statusJawabanBenar;
                    $scope.statusJawabanSalah = $scope.statusJawabanSalah + response[i].statusJawabanSalah;
                }
                $scope.kosong = $scope.jumlahSoal - ($scope.statusJawabanBenar + $scope.statusJawabanSalah);

                //Lock Ujian
                var ref = firebase.database(app).ref("jawabanUjianOnlineSiswaPerPelajaran/" + $scope.data.idJawabanUjianOnlineSiswaPerPelajaran);

                ref.update(JSON.parse(JSON.stringify({
                    "benar": $scope.statusJawabanBenar,
                    "salah": $scope.statusJawabanSalah,
                    "kosong": $scope.kosong,
                    "nilai": $scope.totalNilai,
                    "statusFinish": true
                }))).then(function (resp) {
                    //console.log("Updated");
                });

            });
        }

        if ($scope.data.statusFinish === true) {
            var ref = firebase.database(app).ref("jawabanUjianOnlineSiswaPerPelajaran/" + $scope.data.idJawabanUjianOnlineSiswaPerPelajaran);
            var refObj = $firebaseObject(ref);

            refObj.$loaded().then(function (response) {
                $scope.totalNilai = response.nilai;
                $scope.statusJawabanBenar = response.benar;
                $scope.statusJawabanSalah = response.salah;
                $scope.kosong = response.kosong;
                $scope.jumlahSoal = response.jumlahSoal;
            });
        }

        var avgNilai = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa/" + $scope.data.idRekapJawabanUjianOnlineSiswa + "/pelajaran");
        var listAvgNilai = $firebaseArray(avgNilai);

        $scope.nilaiTotal = 0;
        listAvgNilai.$loaded().then(function (response) {
            for (i = 0; i < response.length; i++) {
                var penilaian = response[i].nilai;
                $scope.nilaiTotal = $scope.nilaiTotal + penilaian;
                $scope.avg = $scope.nilaiTotal / response.length;
                // console.log("total Nilai", $scope.nilaiTotal);
                // console.log("avg", $scope.avg);
                var updateNilaiRata = firebase.database(app).ref("rekapJawabanUjianOnlineSiswa/" + $scope.data.idRekapJawabanUjianOnlineSiswa);

                updateNilaiRata.update(JSON.parse(JSON.stringify({
                    "jumlahNilai": $scope.nilaiTotal,
                    "rataRata": $scope.avg,
                }))).then(function (resp) {
                    // console.log("jumlahSoalUpdate", $scope.jumlahSoal);
                });
            }

        });

    }])

    .controller('statusJawabanSiswaUjianOnlineSiswaOrangTuaCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$ionicPopup', '$ionicLoading', '$state', '$ionicModal', '$ionicActionSheet', '$timeout', '$filter', function ($scope, $stateParams, $firebaseArray, $firebaseObject, $ionicPopup, $ionicLoading, $state, $ionicModal, $ionicActionSheet, $timeout, $filter) {

        $scope.idPenggunaSiswa = localStorage.getItem('idPenggunaSiswa');
        $scope.namaPenggunaSiswa = localStorage.getItem('namaPenggunaSiswa');
        $scope.emailSiswa = localStorage.getItem('emailSiswa');
        $scope.uidSiswa = localStorage.getItem('uidSiswa');
        $scope.idSekolahSiswa = localStorage.getItem('idSekolahSiswa');
        $scope.jenjangSiswa = localStorage.getItem('jenjangSiswa');
        $scope.idProvinsiSiswa = localStorage.getItem('idProvinsiSiswa');
        $scope.idKotaKabupatenSiswa = localStorage.getItem('idKotaKabupatenSiswa');
        $scope.idKecamatanSiswa = localStorage.getItem('idKecamatanSiswa');
        $scope.kodeSekolah = localStorage.getItem('kodeSekolah')
           
        if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP1") { var app = app_smpn1dps; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J1") { var app = app_smpn2; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J8") { var app = app_smpn3; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J9") { var app = app_smpn4; }
        else if ($scope.idSekolahSiswa=== "-MPyF17P3CjaG3Am7g9J10") { var app = app_smpn5; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw1") { var app = app_smpn6; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj1") { var app = app_smpn7; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP6") { var app = app_smpn8; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw13") { var app = app_smpn9; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J6") { var app = app_smpn10; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw12") { var app = app_smpn11; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J7") { var app = app_smpn12; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj8") { var app = app_smpn13; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP5") { var app = app_smpn14; }
        else if ($scope.idSekolahSiswa === "-MPyROcy6xPWAnYTzci8") { var app = app_lentera; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J3") { var app = app_dharmapraja; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj5") { var app = app_harapanmulia; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw8") { var app = app_kusumasari; }
        else if ($scope.idSekolahSiswa === "-MPyA8UKj59icln4APLw24") { var app = app_pelitahati; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj11") { var app = app_pgri1; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP10") { var app = app_rajyamuna; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP12") { var app = app_siladharma; }
        else if ($scope.idSekolahSiswa === "-MPyF17P3CjaG3Am7g9J17") { var app = app_tamanrama; }
        else if ($scope.idSekolahSiswa === "-MPy2LKKp9pwOpJjuoCP13") { var app = app_tawakkal; }
        else if ($scope.idSekolahSiswa === "-MPyESRb8UVcQBHz7pxj14") { var app = app_sapta; }


        if (!$scope.idPenggunaSiswa) {
            $state.go('welcome');
        }

        $scope.data = {
            "idUjian": $stateParams.idUjian,
            "namaUjian": $stateParams.namaUjian,
            "keterangan": $stateParams.keterangan,
            "UjianOnlineTingkat": $stateParams.UjianOnlineTingkat,
            "namaKotaKabupaten": $stateParams.namaKotaKabupaten,
            "namaProvinsi": $stateParams.namaProvinsi,
            "semester": $stateParams.semester,
            "tahunAjaran": $stateParams.tahunAjaran,
            "idPelajaranUjianOnline": $stateParams.idPelajaranUjianOnline,
            "pelajaran": $stateParams.pelajaran,
            "namaPengguna": $stateParams.namaPengguna,
            "uid": $stateParams.uid
        };

        //console.log($scope.data);

        if ($scope.data.keterangan === "all" || $scope.data.keterangan === "Kosong") {
            var ref = firebase.database(app).ref("jawabanUjianOnlineSiswa").orderByChild("filter").equalTo($scope.data.idUjian + "_" + $scope.data.idPelajaranUjianOnline + "_" + $scope.data.uid);
            var listRef = $firebaseArray(ref);

            $ionicLoading.show();
            listRef.$loaded().then(function (response) {
                $ionicLoading.hide();
                $scope.datas = response;
            });
        }
        else if ($scope.data.keterangan === "Benar") {
            var ref = firebase.database(app).ref("jawabanUjianOnlineSiswa").orderByChild("filterStatusJawaban").equalTo($stateParams.idUjian + "_" + $stateParams.idPelajaranUjianOnline + "_" + $scope.data.uid + "_Benar");
            var listRef = $firebaseArray(ref);

            $ionicLoading.show();
            listRef.$loaded().then(function (response) {
                $ionicLoading.hide();
                $scope.datas = response;
            });
        }

        else if ($scope.data.keterangan === "Salah") {
            var ref = firebase.database(app).ref("jawabanUjianOnlineSiswa").orderByChild("filterStatusJawaban").equalTo($stateParams.idUjian + "_" + $stateParams.idPelajaranUjianOnline + "_" + $scope.data.uid + "_Salah");
            var listRef = $firebaseArray(ref);

            $ionicLoading.show();
            listRef.$loaded().then(function (response) {
                $ionicLoading.hide();
                $scope.datas = response;
            });
        }


        $scope.getSoal = function (jawaban) {
            //console.log(jawaban);

            var pembahasanSoal = firebase.database(app).ref("pengaturanUmumUjianOnline").orderByChild("filter").equalTo($stateParams.idUjian + "_" + $stateParams.idPelajaranUjianOnline);
            pembahasanSoal.on("child_added", function (snapshot) {

                if (snapshot.val().pembahasanSoalDibuka === true) {
                    $ionicModal.fromTemplateUrl('templates/modal.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function (modal) {
                        $scope.modal = modal;
                        $scope.modal.show();

                        var refSoal = firebase.database(app).ref("soal/" + jawaban.idSoal);
                        $scope.formData = $firebaseObject(refSoal);

                    });
                }
                else if (snapshot.val().pembahasanSoalDibuka === false) {
                    $ionicPopup.alert({
                        title: 'Informasi',
                        template: "Maaf, Pembahasan Soal Untuk Mata Pelajaran " + $stateParams.pelajaran + " Belum Dibuka.",
                        okType: "button-positive"
                    });
                }
            });

        };

    }])