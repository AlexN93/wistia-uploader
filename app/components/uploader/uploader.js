wistiaUploaderApp.component('uploader', {
  templateUrl: 'components/uploader/uploader.html',
  controller: function ($http, $scope, $sce) {

    $scope.model = {
      isUploading: false,
      uploadProgress: 0,
      showAlert: false,
      videoUrl: '',
      error: ''
    };

    $scope.options = {
      type: "POST",
      url: 'https://upload.wistia.com/?api_password=7805814e5db46045e543c7fa0aa4dc2b8c276c267e469e617299dad2d57d905a',
      autoUpload: true
    };

    $scope.$on('fileuploadadd', function (event, files) {
      $scope.model.isUploading = true;
    });

    $scope.$on('fileuploadprogress', function (e, data) {
      $scope.model.uploadProgress = Math.round((data.loaded * 100.0) / data.total);
    });

    $scope.$on('fileuploaddone', function (e, data) {
      $scope.model.isUploading = false;
      $scope.model.uploadProgress = 0;
      $scope.model.videoUrl = $sce.trustAsResourceUrl('https://fast.wistia.com/embed/iframe/' + data.result.hashed_id + '/?videoFoam=true');
    });

    $scope.$on('fileuploadfail', function (e, data) {
      $scope.model.isUploading = false;
      $scope.model.uploadProgress = 0;
      $scope.model.showAlert = true;
      $scope.model.error = data.result.error;
    });
  }
});